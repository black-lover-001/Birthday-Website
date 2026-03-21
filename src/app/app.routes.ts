import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login')
        .then(m => m.Login)
  },
{
  path: 'home',
  loadComponent: () =>
    import('./home/home-page/home-page')
      .then(m => m.HomePage),
  canActivate: [authGuard], 
  children: [
    {
      path: '',
      redirectTo: 'wishes',
      pathMatch: 'full'
    },
    {
      path: 'wishes',
      loadComponent: () =>
        import('./home/wishes/wishes')
          .then(m => m.Wishes)
    },
    // {
    //   path: 'photos',
    //   loadComponent: () =>
    //     import('./home/photos/photos')
    //       .then(m => m.Photos)
    // },
    {
      path: 'messages',
      loadComponent: () =>
        import('./home/messages/messages')
          .then(m => m.Messages)
    },
    {
      path: 'games',
      loadComponent: () =>
        import('./home/games/games').then(m => m.Games)
    }
  ]
}

];
