import { InMemoryDbService } from "angular-in-memory-web-api";
import {Category} from './pages/categories/shared/category.model';
export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      {id:1, name: "Moradia", description: "Pagamento de Contas da Casa"},
      {id:1, name: "Saúde", description: "Plano de Saúde"},
      {id:1, name: "Lazer", description: "Cinema, parque, praia e etc"},
      {id:1, name: "Salário", description: "Recebimento do Salário"},
      {id:1, name: "Freelas", description: "Trabalhos como freelancer"}
    ];
    return {categories}
  }
}
