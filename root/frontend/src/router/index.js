import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import ProdutoView from '../views/HomeView.vue' //doesn't need because lazy-loading
//import LoginView from '../views/HomeView.vue'
//import CadastroView from '../views/HomeView.vue'
import CarrinhoView from '../views/HomeView.vue'
import FavoritoView from '../views/HomeView.vue'
import PedidosView from '../views/HomeView.vue'
import AvaliacoesView from '../views/HomeView.vue'
import PagamentoView from '../views/HomeView.vue'
import ConfirmacaoView from '../views/HomeView.vue'
import MinhaContaView from '../views/MinhaContaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/produto',
      name: 'produto',
      component: () => import('../views/ProdutoView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/CadastroView.vue')
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: CarrinhoView
    },
    {
      path: '/minha-conta',
      name: 'minha-conta',
      component: MinhaContaView
    },
    {
      path: '/minha-conta/favoritos',
      name: 'favoritos',
      component: FavoritoView
    },
    {
      path: '/minha-conta/meus-pedidos',
      name: 'pedidos',
      component: PedidosView
    },
    {
      path: '/minha-conta/avaliacoes',
      name: 'avaliacoes',
      component: AvaliacoesView
    },
    {
      path: '/pagamento',
      name: 'pagamento',
      component: PagamentoView
    },
    {
      path: '/confirmacao',
      name: 'confirmacao',
      component: ConfirmacaoView
    }
  ]
})

export default router
