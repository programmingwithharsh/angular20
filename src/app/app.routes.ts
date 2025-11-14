import { Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Title } from './title/title';
import { CategoryList } from './categories/category-list/category-list';
import { Count } from './count/count';
import { Demo1 } from './demo1/demo1';
import { Demo2 } from './demo2/demo2';

export const routes: Routes = [
    { path: 'welcome', component: Count },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    {
        path: 'products',
        loadChildren: () => import('./product.routes').then(r => r.PROUDCT_ROUTES)
    },
    { path: 'about', loadComponent: () => import('./about/about').then(r => r.About) },
    { path: 'users', loadComponent: () => import('./user-list/user-list').then(r => r.UserList) },
    { path: 'title', component: Title },
    { path: 'categories', component: CategoryList },
    { path: 'demo1', component: Demo1 },
    { path: 'demo2', component: Demo2 },
];
