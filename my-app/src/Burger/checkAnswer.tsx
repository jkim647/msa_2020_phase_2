import React from 'react';

interface IProps{
    ingredients:any
}

const checkAnswer = (IProps:any) => {
    console.log(IProps.ingredients)
    const hero1 = {
            salad: 3,
             bacon:4,
             cheese:3,
             meat:2
      };
      const hero2 = {
        salad: 3,
        bacon: 4,
        cheese: 3,
        meat: 3
      };
      

      console.log(isEquivalent(hero1,hero2))

      function isEquivalent(a:any,b:any){
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);

        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
    
            // If values of same property are not equal,
            // objects are not equivalent
            if (a[propName] !== b[propName]) {
                return false;
            }
        }
        return true;
      }

    return(
        <div className="Burger">
            
        </div>
    )
};

export default checkAnswer;