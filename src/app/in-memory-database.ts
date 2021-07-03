import { InMemoryDbService } from "angular-in-memory-web-api";
import {Category} from './pages/categories/shared/category.model';
import {Entry} from './pages/entries/shared/entry.model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      {id:1, name: "Moradia", description: "Pagamento de Contas da Casa"},
      {id:2, name: "Saúde", description: "Plano de Saúde"},
      {id:3, name: "Lazer", description: "Cinema, parque, praia e etc"},
      {id:4, name: "Salário", description: "Recebimento do Salário"},
      {id:5, name: "Freelas", description: "Trabalhos como freelancer"}
    ]
    const entries: Entry[] = [
      { id: 1, name: 'Salário', categoryId: categories[3].id, category: categories[3], paid: true, date: "30/01/2021", amount: "4000,00", type: "revenue", description: "Qualquer descrição para essa despesa"} as Entry,
      { id: 2, name: 'Salário', categoryId: categories[3].id, category: categories[3], paid: true, date: "30/05/2021", amount: "4000,00", type: "revenue" } as Entry,
      { id: 3, name: 'Salário', categoryId: categories[3].id, category: categories[3], paid: true, date: "30/06/2021", amount: "4000,00", type: "revenue" } as Entry,
      { id: 4, name: 'Pagamento Projeto Terceiros', categoryId: categories[4].id, category: categories[4], paid: true, date: "05/06/2021", amount: "1500,00", type: "revenue" } as Entry,
      { id: 5, name: 'Pagamento Projeto Terceiros', categoryId: categories[4].id, category: categories[4], paid: true, date: "05/05/2021", amount: "1300,00", type: "revenue" } as Entry,
      { id: 6, name: 'Salário', categoryId: categories[3].id, category: categories[3], paid: true, date: "30/08/2021", amount: "4000,00", type: "revenue" } as Entry,
      { id: 11, name: 'Uber', categoryId: categories[2].id, category: categories[2], paid: true, date: "10/06/2021", amount: "30,00", type: "expense" } as Entry,
      { id: 12, name: 'Aluguel', categoryId: categories[0].id, category: categories[0], paid: true, date: "11/06/2021", amount: "1200,00", type: "expense" } as Entry,
      { id: 13, name: 'Netflix', categoryId: categories[0].id, category: categories[0], paid: true, date: "15/06/2021", amount: "32,00", type: "expense" } as Entry,
      { id: 14, name: 'Primevideo', categoryId: categories[0].id, category: categories[0], paid: true, date: "25/06/2021", amount: "11,00", type: "expense" } as Entry,
      { id: 19, name: 'Viagem', categoryId: categories[2].id, category: categories[2], paid: true, date: "07/06/2021", amount: "350,00", type: "expense" } as Entry,
      { id: 21, name: 'Video Game', categoryId: categories[2].id, category: categories[2], paid: true, date: "17/06/2021", amount: "80,00", type: "expense" } as Entry,
      { id: 22, name: 'Cinema', categoryId: categories[2].id, category: categories[2], paid: true, date: "18/06/2021", amount: "30,00", type: "expense" } as Entry,
      { id: 23, name: 'Jiu Jitsu', categoryId: categories[1].id, category: categories[1], paid: true, date: "21/06/2021", amount: "130,00", type: "expense" } as Entry,
      { id: 24, name: 'Uber', categoryId: categories[2].id, category: categories[2], paid: true, date: "28/06/2021", amount: "23,00", type: "expense" } as Entry,
      { id: 25, name: 'Cinema', categoryId: categories[2].id, category: categories[2], paid: true, date: "28/05/2021", amount: "30,00", type: "expense" }  as Entry,
      { id: 26, name: 'Salário', categoryId: categories[3].id, category: categories[3], paid: true, date: "30/09/2021", amount: "4000,00", type: "revenue" } as Entry,
      { id: 27, name: 'Salário', categoryId: categories[3].id, category: categories[3], paid: true, date: "30/10/2021", amount: "4000,00", type: "revenue" } as Entry,
      { id: 28, name: 'Salário', categoryId: categories[3].id, category: categories[3], paid: true, date: "30/11/2021", amount: "4000,00", type: "revenue" } as Entry,
      { id: 29, name: 'Salário', categoryId: categories[3].id, category: categories[3], paid: true, date: "28/02/2021", amount: "4000,00", type: "revenue"} as Entry,
      { id: 30, name: 'Salário', categoryId: categories[3].id, category: categories[3], paid: true, date: "30/03/2021", amount: "4000,00", type: "revenue"} as Entry,
      { id: 31, name: 'Salário', categoryId: categories[3].id, category: categories[3], paid: true, date: "30/04/2021", amount: "4000,00", type: "revenue"} as Entry,
      { id: 32, name: 'Pagamento Projeto Terceiros', categoryId: categories[4].id, category: categories[4], paid: true, date: "05/01/2021", amount: "700,00", type: "revenue" } as Entry,
      { id: 33, name: 'Pagamento Projeto Terceiros', categoryId: categories[4].id, category: categories[4], paid: true, date: "05/04/2021", amount: "900,00", type: "revenue" } as Entry,
      { id: 34, name: 'Aluguel', categoryId: categories[0].id, category: categories[0], paid: true, date: "11/05/2021", amount: "1200,00", type: "expense" }  as Entry,
      { id: 35, name: 'Cinema', categoryId: categories[2].id, category: categories[2], paid: true, date: "10/05/2021", amount: "30,00", type: "expense" }  as Entry,
      { id: 36, name: 'Netflix', categoryId: categories[0].id, category: categories[0], paid: true, date: "15/05/2021", amount: "32,00", type: "expense" }  as Entry,
      { id: 37, name: 'Uber', categoryId: categories[2].id, category: categories[2], paid: true, date: "16/05/2021", amount: "36,00", type: "expense" }  as Entry,
      { id: 38, name: 'Jiu Jitsu', categoryId: categories[1].id, category: categories[1], paid: true, date: "21/05/2021", amount: "130,00", type: "expense" }  as Entry,
      { id: 39, name: 'Cinema', categoryId: categories[2].id, category: categories[2], paid: true, date: "05/05/2021", amount: "30,00", type: "expense" }  as Entry,
      { id: 40, name: 'Primevideo', categoryId: categories[0].id, category: categories[0], paid: true, date: "25/05/2021", amount: "10,00", type: "expense" }  as Entry,
      { id: 41, name: 'Parque', categoryId: categories[2].id, category: categories[2], paid: true, date: "28/05/2021", amount: "60,00", type: "expense" }  as Entry,
      { id: 42, name: 'Cinema', categoryId: categories[2].id, category: categories[2], paid: true, date: "30/05/2021", amount: "30,00", type: "expense" }  as Entry,
      { id: 43, name: 'Aluguel', categoryId: categories[0].id, category: categories[0], paid: true, date: "11/04/2021", amount: "1200,00", type: "expense" }  as Entry,
      { id: 44, name: 'Netflix', categoryId: categories[0].id, category: categories[0], paid: true, date: "15/04/2021", amount: "32,00", type: "expense" }  as Entry,
      { id: 45, name: 'Primevideo', categoryId: categories[0].id, category: categories[0], paid: true, date: "25/04/2021", amount: "10,00", type: "expense" }  as Entry,
      { id: 46, name: 'Jiu Jitsu', categoryId: categories[1].id, category: categories[1], paid: true, date: "21/04/2021", amount: "130,00", type: "expense" }  as Entry,
      { id: 47, name: 'Uber', categoryId: categories[2].id, category: categories[2], paid: true, date: "28/04/2021", amount: "30,00", type: "expense" }  as Entry,
      { id: 48, name: 'Cinema', categoryId: categories[2].id, category: categories[2], paid: true, date: "28/04/2021", amount: "30,00", type: "expense" }  as Entry,
      { id: 49, name: 'Aluguel', categoryId: categories[0].id, category: categories[0], paid: true, date: "11/03/2021", amount: "1200,00", type: "expense" }  as Entry,
      { id: 50, name: 'Netflix', categoryId: categories[0].id, category: categories[0], paid: true, date: "15/03/2021", amount: "32,00", type: "expense" }  as Entry,
      { id: 51, name: 'Primevideo', categoryId: categories[0].id, category: categories[0], paid: true, date: "25/03/2021", amount: "10,00", type: "expense" }  as Entry,
      { id: 52, name: 'Uber', categoryId: categories[2].id, category: categories[2], paid: true, date: "28/03/2021", amount: "30,00", type: "expense" }  as Entry,
      { id: 53, name: 'Cinema', categoryId: categories[2].id, category: categories[2], paid: true, date: "28/03/2021", amount: "30,00", type: "expense" }  as Entry,
      { id: 54, name: 'Aluguel', categoryId: categories[0].id, category: categories[0], paid: true, date: "11/02/2021", amount: "1200,00", type: "expense" }  as Entry,
      { id: 55, name: 'Netflix', categoryId: categories[0].id, category: categories[0], paid: true, date: "15/02/2021", amount: "32,00", type: "expense" }  as Entry,
      { id: 56, name: 'Primevideo', categoryId: categories[0].id, category: categories[0], paid: true, date: "25/02/2021", amount: "10,00", type: "expense" }  as Entry,
      { id: 57, name: 'Uber', categoryId: categories[2].id, category: categories[2], paid: true, date: "28/02/2021", amount: "30,00", type: "expense" }  as Entry,
      { id: 58, name: 'Cinema', categoryId: categories[2].id, category: categories[2], paid: true, date: "28/02/2021", amount: "30,00", type: "expense" }  as Entry,
      { id: 59, name: 'Jiu Jitsu', categoryId: categories[1].id, category: categories[1], paid: true, date: "21/02/2021", amount: "130,00", type: "expense" }  as Entry,
    ]
    return {categories,entries}
  }
}
