import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";


export interface Step {
  recipeName: string;
  forApprentice: boolean;
  shortDescription: string;
  description: string;
  image: string;
}
export interface Recipe {
  id: string;
  name: string;
  image: string;
  duration: number; //(temps en secondes)
  steps: Step[];
}
const recipes: Recipe[] = [
  {
    "id": "1",
    "name": "Coq au vin",
    "image": "https://assets.afcdn.com/recipe/20190307/88896_w1024h1024c1cx3360cy2240.jpg",
    "duration" : 300,
    "steps": [
      {
        "recipeName":"Coq au vin",
        "shortDescription": "Faire mariner le coq dans du vin",
        "description":"",
        "forApprentice": false,
        "image": "https://assets.afcdn.com/recipe/20170312/9120_w1024h576c1cx360cy560.webp"
      },
      {
        "recipeName":"Coq au vin",
        "shortDescription": "Preparer les champignons",
        "description":"",
        "forApprentice": false,
        "image": "https://cdn.futura-sciences.com/sources/images/cepe-champignon.jpg"
      }
    ]
  }, {
    "id": "2",
    "name": "Salade niçoise",
    "duration" : 300,
    "image": "https://img.cuisineaz.com/660x660/2013/12/20/i34581-salade-nicoise-rapide.jpeg",
    "steps": [
      {
        "recipeName":"Salade niçoise",
        "description": "Laver et couper les tomates en quartiers. Ajouter les tomates, la cébette, les févettes, les olives, les œufs durs, le thon et les anchois.",
        "shortDescription":"",
        "forApprentice": false,
        "image": "https://www.regal.fr/sites/art-de-vivre/files/r60_salade-nicoise_dr.jpg"
      },
      {
        "recipeName":"Salade niçoise",
        "description": "Placer le tout joliment dans une assiette. Saupoudrer de sel et de poivre , puis arroser d'huile d'olive et de vinaigre de vin et mettre au frais pour 1heures",
        "shortDescription":"",
        "forApprentice": false,
        "image": "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2019.2F11.2F15.2F3a3df187-18ec-4b3f-891c-b6c53ae90f63.2Ejpeg/850x478/quality/80/crop-from/center/salade-nicoise-a-l-huile-d-olive-et-olives-de-nice-aop.jpeg"
      },
      {
        "recipeName":"Salade niçoise",
        "description": "Faire durcir les oeufs (6 à 8 minutes après ébullition de l'eau), puis les faire bien refroidir à l'eau froide. Couper les oeufs durs en quartiers",
        "shortDescription":"",
        "forApprentice": true,
        "image": "https://www.colichef.fr/7018/coupe-oeufs-en-quartiers.jpg"
      },
      {
        "recipeName":"Salade niçoise",
        "description": "Hacher les cébettes et les disposer au fond du plat.",
        "shortDescription":"",
        "forApprentice": true,
        "image": "https://nobunplease.com/wp-content/uploads/2022/06/Chopped-green-onion-in-a-bowl.jpg"
      },
      {
        "recipeName":"Salade niçoise",
        "description": "Ajouter les févettes, le poivron vert finement coupé, les radis coupés en rondelles et le thon bien égouté et émietté. Mélanger grossièrement tous ces ingrédients avec du sel et du poivre.",
        "shortDescription":"",
        "forApprentice": true,
        "image":"https://www.undejeunerdesoleil.com/wp-content/uploads/2017/04/Salade_feves_radis_light.jpg"
      },
      {
        "recipeName":"Salade niçoise",
        "description": "Couper les tomates en fines rondelles et les ajouter ainsi que les artichauts Disposer les oeufs sur le dessus et ajouter les filets d'anchois, les olives noires et le basilic finement ciselé.",
        "shortDescription":"",
        "forApprentice": true,
        "image": "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2019.2F11.2F15.2F3a3df187-18ec-4b3f-891c-b6c53ae90f63.2Ejpeg/850x478/quality/80/crop-from/center/salade-nicoise-a-l-huile-d-olive-et-olives-de-nice-aop.jpeg"
      },
      {
        "recipeName":"Salade niçoise",
        "description": "Enfin, saupoudrer de sel et de poivre, puis arroser d'huile d'olive et de vinaigre de vin.",
        "shortDescription":"",
        "forApprentice": true,
        "image": "https://thumbs.dreamstime.com/b/bouteilles-d-huile-d-olive-et-de-vinaigre-de-vin-16721301.jpg"
      },
      {
        "recipeName":"Salade niçoise",
        "description": "Mettre au frais 1 heure.",
        "shortDescription":"",
        "forApprentice": true,
        "image": "https://astucesdegrandmere.net/wp-content/uploads/2022/09/aliments-a-conserver-au-frais.png"
      }

    ]
  },
  {
    "id": "3",
    "name": "Genoise chocolat secret maison",
    "image": "https://www.mesinspirationsculinaires.com/wp-content/uploads/2015/04/rectte-de-la-genoise-a-la-chocolat-1.jpg",
    "duration" : 300,
    "steps": [{
      "recipeName":"Genoise chocolat secret maison",
      "shortDescription":"Préchauffer le four à 180 C (350 F)",
      "description":"",
      "forApprentice": true,
      "image":"https://www.wikihow.com/images_en/thumb/a/a6/Preheat-an-Oven-Step-12-Version-3.jpg/v4-460px-Preheat-an-Oven-Step-12-Version-3.jpg"
    },
      {
        "recipeName":"Genoise chocolat secret maison",
        "shortDescription":"Séparer les blancs des jaunes",
        "description":"",
        "forApprentice": true,
        "image":"https://astucesdegrandmere.net/wp-content/uploads/2022/06/iStock-588597386.jpg"
      },
      {
        "recipeName":"Genoise chocolat secret maison",
        "forApprentice": true,
        "shortDescription":"Dans un saladier battre les blancs ainsi que l’extrait de vanille a grande vitesse. Quand ça commence a mousser ajouter le sucre en 3 fois.\n Continuer a battre a vitesse maximale jusqu’à ce que des pics se forment",
        "description":"",
        "image":""
      },
      {
        "recipeName":"Genoise chocolat secret maison",
        "description":"Ajouter les jaunes legerement battus et continuer a battre jusqu’à incorporation et un appareil léger",
        "shortDescription":"",
        "forApprentice": true,
        "image":"https://santecool.net/wp-content/uploads/2018/11/A-1024x703.jpeg"
      },
      {
        "recipeName":"Genoise chocolat secret maison",
        "description":"Ajouter la farine et le cacao tamises et incorporer a l’aide d’une spatule délicatement.\n Beurrer et fariner un moule recouvert de papier sulfurisé de préférence et verser la préparation.",
        "shortDescription":"",
        "forApprentice": true,
        "image":"https://www.marciatack.fr/wp-content/uploads/2014/04/chocolat-fondu-500x334.jpg"
      }]

  },
  {
    "id": "4",
    "name": "Gratin dauphinois",
    "image": "https://assets.afcdn.com/recipe/20201217/116564_w1024h1024c1cx1009cy951.webp",
    "duration" : 300,
    "steps": []
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
