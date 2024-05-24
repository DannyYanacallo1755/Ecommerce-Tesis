import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: 'Producto 1',
        price: 12,
        image: 'assets/images/foods/producto 1.jpg',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 2,
        title: 'producto 2',
        price: 21,
        image: 'assets/images/foods/Producto 2.jpg',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 3,
        title: 'producto 3',
        price: 16,
        image: 'assets/images/foods/Producto 3.jpg',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 4,
        title: 'producto 4',
        price: 20,
        image: 'assets/images/foods/Producto 4.jpg',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 5,
        title: 'producto 5',
        price: 10,
        image: 'assets/images/foods/Producto 5.jpg',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 6,
        title: 'producto 6',
        price: 13,
        image: 'assets/images/foods/Producto 6.jpg',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
    ];
  }

  getFood(id: number): Food {
    return this.getFoods().find((food) => food.id === id);
  }
}
