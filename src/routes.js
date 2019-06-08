import GrowerList from './components/grower/grower-list.vue';
import GrowerNew from './components/grower/grower-new.vue';
import GrowerEdit from './components/grower/grower-edit.vue';

export const routes = [
  { name:'grower-list', path:'/grower/list', component: GrowerList, title:'Listar Fazendeiros' },
  { name:'grower-new', path:'/grower/new', component: GrowerNew, title:'Criar Fazendeiro' },
  { name:'grower-edit', path:'/grower/edit', component: GrowerEdit, title:'Editar Fazendeiro' },
]
