export default function getTempAndDate(
  data: { list: any; }[],
 
) {
  
  let tempData: number[] = [];
        let dateData: string[] = [];
        let curDt:string[] = [];
    const {list} = data[0];
    list.map((item: any, index: number) => {
      if(index === 0) return;
      if (!curDt.includes(new Date(item.dt* 1000).toString().slice(0,3))) {
        const {
            dt,
            main: { temp },
          }
         = item;

        let date = new Date(dt * 1000);
          curDt.push(date.toString().slice(0,3));
        dateData.push(date.toString().slice(0,3));
        tempData.push(temp);

      }
      
    });
    console.log(tempData, dateData);
    return({tempData, dateData});
  }

