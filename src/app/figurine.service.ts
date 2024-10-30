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
    image: '/assets/images/IMG_3503.jpeg',
    description:"Rejoignez le village des irréductibles Gaulois avec cette figurine Astérix de haute qualité ! Conçue en résine robuste et peinte à la main, elle capture toute la malice et la bravoure du célèbre héros moustachu. D’une taille idéale pour s’intégrer à votre collection ou pour être exposée en décoration, cette figurine reflète l’attention aux détails et l’authenticité de l’univers d’Astérix. Une pièce incontournable pour tout fan de la bande dessinée légendaire.",
    prix:55
  },
  { name: "obelix",
    image: "/assets/images/IMG_3502.jpeg",
    description:"Laissez-vous conquérir par la force tranquille d’Obélix avec cette magnifique figurine. Faite de résine premium et peinte avec précision, elle présente le personnage dans toute sa grandeur, menhir en main et regard déterminé. Les détails des plis de son pantalon, des traits de son visage, et du célèbre casque ailé montrent un soin artistique inégalé. Cette figurine est parfaite pour tous les amoureux de la saga qui souhaitent capturer un morceau de la Gaule dans leur espace de vie !",
    prix:60
  },
  { name: "Idefix",
    image: "/assets/images/IMG_3504.jpeg",
    description:"Pour les fans du fidèle Idéfix, cette figurine est un véritable trésor ! Fabriquée avec soin en résine et peinte minutieusement, elle représente le petit chien plein d’entrain aux côtés de ses maîtres Astérix et Obélix. Avec son regard espiègle et ses adorables détails, cette figurine est idéale pour compléter votre collection ou comme cadeau pour les admirateurs de la série.",
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

