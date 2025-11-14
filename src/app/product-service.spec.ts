import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProductService } from './product-service';
import { IProduct } from './product';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  const mockProducts: IProduct[] = [
    {
      productId: 1,
      productName: 'Laptop',
      price: 50000,
      productCode: '',
      description: '',
      starRating: 4,
      imageUrl: '',
      releaseDate: ''
    },
    {
      productId: 2,
      productName: 'Mouse',
      price: 500,
      productCode: '',
      description: '',
      starRating: 4.3,
      imageUrl: '',
      releaseDate: ''
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ProductService,
        provideHttpClient(),          // HttpClient provider
        provideHttpClientTesting()    // Http testing (Angular 20+)
      ]
    });

    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // ensure no outstanding requests
  });

  // --------------------------------------------------
  // TEST 1: Service created
  // --------------------------------------------------
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // --------------------------------------------------
  // TEST 2: getProducts() success
  // --------------------------------------------------
  it('should return products from getProducts()', () => {
    service.getProducts().subscribe(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(mockProducts);
    });

    const req = httpMock.expectOne('products.json');
    expect(req.request.method).toBe('GET');

    req.flush(mockProducts);
  });

  // --------------------------------------------------
  // TEST 3: getProduct(id)
  // --------------------------------------------------
  it('should return single product from getProduct()', () => {
    service.getProduct(2).subscribe(product => {
      expect(product).toBeTruthy();
      expect(product?.productId).toBe(2);
      expect(product?.productName).toBe('Mouse');
    });

    const req = httpMock.expectOne('products.json');
    req.flush(mockProducts);
  });

  // --------------------------------------------------
  // TEST 4: Error handling
  // --------------------------------------------------
  it('should handle error in getProducts()', () => {
    const errorMessage =
      'Server returned code: 500, error message is: Http failure response for products.json: 500 Internal Server Error';

    service.getProducts().subscribe({
      next: () => fail('Should have thrown error'),
      error: err => {
        expect(err).toBe(errorMessage); // ✔ Correct expected string
      }
    });

    const req = httpMock.expectOne('products.json');

    req.flush('error', {
      status: 500,
      statusText: 'Internal Server Error'
    });
  });
});
