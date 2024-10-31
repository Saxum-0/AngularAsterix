import { Injectable } from '@angular/core';

export interface figurine {
  name: string;
  image: string;
  description: string;
  prix: number;
}

@Injectable({
  providedIn: 'root'
})

export class FigurineService {

figurines = [
  { name: "Asterix",
    image: 'IMG_3503.jpeg',
    description:"Rejoignez le village des irréductibles Gaulois avec cette figurine Astérix de haute qualité ! Conçue en résine robuste et peinte à la main, elle capture toute la malice et la bravoure du célèbre héros moustachu. D’une taille idéale pour s’intégrer à votre collection ou pour être exposée en décoration, cette figurine reflète l’attention aux détails.",
    prix:55
  },
  { name: "obelix",
    image: "IMG_3502.jpeg",
    description:"Laissez-vous conquérir par la force tranquille d’Obélix avec cette magnifique figurine. Faite de résine premium et peinte avec précision, elle présente le personnage dans toute sa grandeur, menhir en main et regard déterminé. Les détails des plis de son pantalon, des traits de son visage, et du célèbre casque ailé montrent un soin artistique inégalé.",
    prix:60
  },
  { name: "Idefix",
    image: "IMG_3504.jpeg",
    description:"Pour les fans du fidèle Idéfix, cette figurine est un véritable trésor ! Fabriquée avec soin en résine et peinte minutieusement, elle représente le petit chien plein d’entrain aux côtés de ses maîtres Astérix et Obélix.",
    prix:25
  },

];
  
  getfigurines(): any[]{
    return this.figurines;
  }
  getfigurinename(name: string):  any {
    return this.figurines.find(figurines => figurines.name === name)

  }
  constructor() { }
}

