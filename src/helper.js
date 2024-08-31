

export const getCharacter=file=>String.fromCharCode(file+96)

export const createPosition=()=>{
    const position=new Array(8).fill('').map(x=>new Array(8).fill(''))
    
for(let i=0;i<8;i++){
  position[1][i] ='wp';
  position[6][i]='bp';
  if(i==1 || i==6) continue;
}
position[1][1]='wn'
position[1][6]='wn'

  position[0][0]='wb'
  position[0][2]='wb'
  position[0][3]='wn'
  position[0][4]='wn'
  position[0][5]='wb'
  position[0][7]='wb'

  
position[6][1]='bn'
position[6][6]='bn'


  position[7][0]='bb'
   position[7][2]='bb'
   position[7][3]='bn'
  position[7][4]='bn'
   position[7][5]='bb'
  position[7][7]='bb'

 
  
    return position
}

 export const copyPosition=position=>{
     const newPosition=new Array(8).fill('').map(x=>new Array(8).fill(''))

     for(let rank=0;rank<8;rank++){
         for (let file = 0; file < 8; file++) {
             newPosition[rank][file] = position[rank][file];
            
         }
     }
     
     return newPosition

 }
 

