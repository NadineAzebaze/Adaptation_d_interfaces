import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";


export interface Step {
  name: string;
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
        "name":"Etape 1 ",
        "shortDescription": "Préparez les lardons et faites revenir les morceaux de viande",
        "description":"faites dégraisser les lardons dans une cocotte puis réservez-les. Faites fondre le beurre la cocotte, égouttez les morceaux de viande et faites-les y revenir de toutes parts jusqu'à coloration.",
        "image": "https://i1.wp.com/www.cuisiner-manger.fr/wp-content/uploads/2016/02/20160221_090007620_iOS-e1456075010982.jpg?resize=474%2C632"
      },
      {
        "name":"Etape 2",
        "shortDescription": "Faites mijoter la marinade et les lardons puis laiisez cuire avec les légumes pendant 1 heure.",
        "description":"Ajoutez les lardons, la marinade filtrée, complétez avec de l’eau chaude à hauteur, salez et poivrez. Ajoutez les oignons grelots épluchés. Laissez mijoter 1 h, puis ajoutez les champignons de Paris coupés en morceaux et poursuivez la cuisson pendant encore 1 h.",
        "image": "https://i2.wp.com/www.cuisiner-manger.fr/wp-content/uploads/2016/02/20160221_111419958_iOS-e1456075958922.jpg?resize=474%2C632"
      },
      {
        "name":"Etape 3",
        "shortDescription": "liez la sauce avec le fond de volaille.",
        "description":"Sortez les morceaux de coq, liez la sauce avec le fond de volaille puis remettez les morceaux de coq dans la cocotte et maintenez au chaud jusqu’au moment de servir.",
        "image": "https://files.meilleurduchef.com/mdc/photo/recette/fond-brun-veau/fond-brun-veau-3-640.jpg"
      },
      {
        "name":"Etape 4",
        "shortDescription": "Servez dans les plats.",
        "description":"Préparez les plats tels que sur l'image.",
        "image": "http://royal-opera.fr/wp-content/uploads/2018/05/lhistoire-de-la-recette-du-coq-au-vin.jpg"
      }
    ]
  }, {
    "id": "2",
    "name": "Salade niçoise",
    "duration" : 300,
    "image": "https://img.cuisineaz.com/660x660/2013/12/20/i34581-salade-nicoise-rapide.jpeg",
    "steps": [
      {
        "name":"Etape 1",
        "description": "Faire durcir les oeufs (6 à 8 minutes après ébullition de l'eau), puis les faire bien refroidir à l'eau froide. Couper les oeufs durs en quartiers",
        "shortDescription":"Apprêtez les oeufs",
        "image": "https://www.colichef.fr/7018/coupe-oeufs-en-quartiers.jpg"
      },
      {
        "name":"Etape 2",
        "description": "Hacher les cébettes et les disposer au fond du plat.",
        "shortDescription":"Hacher les cébettes et les disposer au fond du plat.",
        "image": "https://nobunplease.com/wp-content/uploads/2022/06/Chopped-green-onion-in-a-bowl.jpg"
      },
      {
        "name":"Etape 3",
        "description": "Laver et couper les tomates en quartiers. Ajouter les tomates, les févettes, les olives, le thon et les anchois. Mélanger grossièrement tous ces ingrédients avec du sel et du poivre.",
        "shortDescription":"Apprêtez les tomates, les févettes, olives,thon et anchois et mélanger grossièrement tous les ingrédients avec du sel et du poivre",
        "image": "https://www.regal.fr/sites/art-de-vivre/files/r60_salade-nicoise_dr.jpg"
      },
      {
        "name":"Etape 4",
        "description": "Placer le tout joliment dans une assiette. Saupoudrer de sel et de poivre , puis arroser d'huile d'olive et de vinaigre de vin et mettre au frais pour 1heures",
        "shortDescription":"arroser d'huile d'olive et de vinaigre de vin et mettre au frais",
        "image": "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2019.2F11.2F15.2F3a3df187-18ec-4b3f-891c-b6c53ae90f63.2Ejpeg/850x478/quality/80/crop-from/center/salade-nicoise-a-l-huile-d-olive-et-olives-de-nice-aop.jpeg"
      }
    ]
  },
  {
    "id": "3",
    "name": "Genoise chocolat secret maison",
    "image": "https://www.mesinspirationsculinaires.com/wp-content/uploads/2015/04/rectte-de-la-genoise-a-la-chocolat-1.jpg",
    "duration" : 300,
    "steps": [
      {
      "name":"Etape 1",
      "shortDescription":"Préchauffer le four",
      "description":"Préchauffer le four à 180 C (350 F)",
      "image":"https://www.wikihow.com/images_en/thumb/a/a6/Preheat-an-Oven-Step-12-Version-3.jpg/v4-460px-Preheat-an-Oven-Step-12-Version-3.jpg"
    },
      {
        "name":"Etape 2",
        "shortDescription":"Séparer les blancs des jaunes",
        "description":"Séparer les blancs des jaunes",
        "image":"https://astucesdegrandmere.net/wp-content/uploads/2022/06/iStock-588597386.jpg"
      },
      {
        "name":"Etape 3",
        "description":"Dans un saladier battre les blancs ainsi que l’extrait de vanille a grande vitesse. Quand ça commence a mousser ajouter le sucre en 3 fois.\n Continuer a battre a vitesse maximale jusqu’à ce que des pics se forment",
        "shortDescription":"Bttre les blancs dans un saladier",
        "image":"https://santecool.net/wp-content/uploads/2018/11/A-1024x703.jpeg"
      },
      {
        "name":"Etape 4",
        "description":"Ajouter les jaunes legerement battus et continuer a battre jusqu’à incorporation et une apparence légère",
        "shortDescription":"Ajouter les jaunes d'oeufs",
        "image":"https://img-3.journaldesfemmes.fr/D2H5XDOGs-22b7ArULPrpTvfhjw=/1240x/smart/bfd8823b4cf04649994fd3effc13d759/ccmcms-jdf/36620138.jpg"
      },
      {
        "name":"Etape 5",
        "description":"Ajouter la farine et le cacao tamises et incorporer a l’aide d’une spatule délicatement.\n Beurrer et fariner un moule recouvert de papier sulfurisé de préférence et verser la préparation.",
        "shortDescription":"Ajouter la farine et le cacao; et verser la préparation dans le moule",
        "image":"https://www.marciatack.fr/wp-content/uploads/2014/04/chocolat-fondu-500x334.jpg"
      }]

  },
  {
    "id": "4",
    "name": "Gratin dauphinois",
    "image": "https://assets.afcdn.com/recipe/20201217/116564_w1024h1024c1cx1009cy951.webp",
    "duration" : 300,
    "steps": [
      {
        "name":"Etape 1",
        "shortDescription":"Eplucher, laver et couper les pommes de terre",
        "description":"Eplucher, laver et couper les pommes de terre en rondelles fines (NB : ne pas les laver APRES les avoir coupées, car l'amidon est nécessaire à une consistance correcte).",
        "image":"https://cf-simple-s3-origin-cdn-lescommis-843618443184.s3.eu-west-3.amazonaws.com/articles/v1/original_images/Capture_decran_2020-03-17_a_16.40.18.png"
      },
      {
        "name":"Etape 2",
        "shortDescription":"Hacher l'ail très finement.",
        "description":"Hacher l'ail très finement.",
        "image":"https://www.materiel-horeca.com/guide/wp-content/uploads/2021/12/presse-ail-6.jpeg"
      },
      {
        "name":"Etape 3",
        "description":"Porter à ébullition dans une casserole le lait, l'ail, le sel, le poivre et la muscade puis y plonger les pommes de terre et laisser cuire 10 à 15 min, selon leur fermeté.",
        "shortDescription":"Faire cuire les pommes dans du lait assaisoné à ebullition",
        "image":"https://img.over-blog-kiwi.com/1/02/97/00/20141020/ob_53e5be_a160960.JPG"
      },
      {
        "name":"Etape 4",
        "description":"Préchauffer le four à 180°C (thermostat 6) et beurrer un plat à gratin à l'aide d'un pinceau.",
        "shortDescription":"Préchauffer le four et beurrer un plat à gratin .",
        "image":"https://www.shutterstock.com/image-photo/chef-holding-culinary-brush-he-260nw-2046380222.jpg"
      },
      {
        "name":"Etape 5",
        "description":"Placer les pommes de terre égouttées dans le plat. Les recouvrir de crème, puis disposer des petites noix de beurre sur le dessus.Enfourner pour 50 min à 1 heure de cuisson.",
        "shortDescription":"Y placer les pommes de terre et enfourner.",
        "image":"https://files.meilleurduchef.com/mdc/photo/recette/gratin-dauphinois/gratin-dauphinois-etape-19-480.jpg"
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
