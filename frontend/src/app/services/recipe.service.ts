import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";


export interface Step {
  name: string;
  duration: number;
  shortDescription: string;
  description: string;
  image: string;
}
export interface Recipe {
  id: string;
  name: string;
  image: string;
  description: string;
  steps: Step[];
}
const recipes: Recipe[] = [
  {
    id: "1",
    name: "Poulet",
    image: "https://www.fourchettenutrition.com/wp-content/uploads/2021/06/poulet-sauce-chasseur.png",
    description: "Poulet",
    steps: [
      {
        name: "Faire cuire le poulet",
        description: "Faire cuire le poulet (long)",
        shortDescription: "Faire cuire le poulet (short)",
        duration: 10,
        image: "https://img-3.journaldesfemmes.fr/vFEM-3POiKT8i8NmZvqwIZiG9kg=/1500x/smart/1a712856aaaf419dbfa5d24cc9808e03/ccmcms-jdf/35925017.jpg"
      }, {
        name: "Preparer l'assaisonnement",
        description: "Preparer l'assaisonnement (long)",
        shortDescription: "Preparer l'assaisonnement (short)",
        duration: 5,
        image: 'https://www.papillesetpupilles.fr/wp-content/uploads/2017/10/Escalopes-de-poulet-sauce-piquante.jpg'
      }
    ]
  }, {
    id: "2",
    name: "Forêt noire",
    image: "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2020.2F06.2F08.2F9ecf8e58-65e9-4e50-af3d-bc723292d06b.2Ejpeg/750x562/quality/80/crop-from/center/cr/wqkgU3RvY2tGb29kIC8gU3VjcsOpIFNhbMOpIC8gRmVtbWUgQWN0dWVsbGU%3D/foret-noire.jpeg",
    description: "Forêt noire",
    steps: [
      {
        name: "Faire cuire le gâteau",
        description: "Faire cuire le gâteau (long)",
        shortDescription: "Faire cuire le gâteau (short)",
        duration: 10,
        image: "https://boulanger.scene7.com/is/image/Boulanger/7332543720194_h_f_l_0"
      }
    ]
  }, {
    id: "3",
    name: "Forêt noire",
    image: "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2020.2F06.2F08.2F9ecf8e58-65e9-4e50-af3d-bc723292d06b.2Ejpeg/750x562/quality/80/crop-from/center/cr/wqkgU3RvY2tGb29kIC8gU3VjcsOpIFNhbMOpIC8gRmVtbWUgQWN0dWVsbGU%3D/foret-noire.jpeg",
    description: "Forêt noire",
    steps: [
      {
        name: "Faire cuire le gâteau",
        description: "Faire cuire le gâteau (long)",
        shortDescription: "Faire cuire le gâteau (short)",
        duration: 10,
        image: "https://boulanger.scene7.com/is/image/Boulanger/7332543720194_h_f_l_0"
      }
    ]
  }, {
    id: "4",
    name: "Forêt noire",
    image: "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2020.2F06.2F08.2F9ecf8e58-65e9-4e50-af3d-bc723292d06b.2Ejpeg/750x562/quality/80/crop-from/center/cr/wqkgU3RvY2tGb29kIC8gU3VjcsOpIFNhbMOpIC8gRmVtbWUgQWN0dWVsbGU%3D/foret-noire.jpeg",
    description: "Forêt noire",
    steps: [
      {
        name: "Faire cuire le gâteau",
        description: "Faire cuire le gâteau (long)",
        shortDescription: "Faire cuire le gâteau (short)",
        duration: 10,
        image: "https://boulanger.scene7.com/is/image/Boulanger/7332543720194_h_f_l_0"
      }
    ]
  }, {
    id: "5",
    name: "Forêt noire",
    image: "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2020.2F06.2F08.2F9ecf8e58-65e9-4e50-af3d-bc723292d06b.2Ejpeg/750x562/quality/80/crop-from/center/cr/wqkgU3RvY2tGb29kIC8gU3VjcsOpIFNhbMOpIC8gRmVtbWUgQWN0dWVsbGU%3D/foret-noire.jpeg",
    description: "Forêt noire",
    steps: [
      {
        name: "Faire cuire le gâteau",
        description: "Faire cuire le gâteau (long)",
        shortDescription: "Faire cuire le gâteau (short)",
        duration: 10,
        image: "https://boulanger.scene7.com/is/image/Boulanger/7332543720194_h_f_l_0"
      }
    ]
  }, {
    id: "6",
    name: "Forêt noire",
    image: "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2020.2F06.2F08.2F9ecf8e58-65e9-4e50-af3d-bc723292d06b.2Ejpeg/750x562/quality/80/crop-from/center/cr/wqkgU3RvY2tGb29kIC8gU3VjcsOpIFNhbMOpIC8gRmVtbWUgQWN0dWVsbGU%3D/foret-noire.jpeg",
    description: "Forêt noire",
    steps: [
      {
        name: "Faire cuire le gâteau",
        description: "Faire cuire le gâteau (long)",
        shortDescription: "Faire cuire le gâteau (short)",
        duration: 10,
        image: "https://boulanger.scene7.com/is/image/Boulanger/7332543720194_h_f_l_0"
      }
    ]
  }, {
    id: "7",
    name: "Forêt noire",
    image: "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2020.2F06.2F08.2F9ecf8e58-65e9-4e50-af3d-bc723292d06b.2Ejpeg/750x562/quality/80/crop-from/center/cr/wqkgU3RvY2tGb29kIC8gU3VjcsOpIFNhbMOpIC8gRmVtbWUgQWN0dWVsbGU%3D/foret-noire.jpeg",
    description: "Forêt noire",
    steps: [
      {
        name: "Faire cuire le gâteau",
        description: "Faire cuire le gâteau (long)",
        shortDescription: "Faire cuire le gâteau (short)",
        duration: 10,
        image: "https://boulanger.scene7.com/is/image/Boulanger/7332543720194_h_f_l_0"
      }
    ]
  }
]

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  private recipes: Recipe[] = [];
  recipes$ = new BehaviorSubject<Recipe[]>([]);

  constructor(private http: HttpClient) {
    this.retrieveRecipes();
  }

  retrieveRecipes(): void {
    /* this.http.get<Recipe[]>("http://localhost:3000/recipe").subscribe((recipes) => {
      this.recipes = recipes;
      this.subject.next(this.recipes);
    }); */
    this.recipes = recipes;
    this.recipes$.next(this.recipes);
  }
}
