import GrowerList from './components/grower/grower-list.vue';
import GrowerNew from './components/grower/grower-new.vue';

export const routes = [
  { name:'grower-list', path:'/grower/list', component: GrowerList, title:'Listar Fazendeiros' },
  { name:'grower-new', path:'/grower/new', component: GrowerNew, title:'Criar Fazendeiro' },
]