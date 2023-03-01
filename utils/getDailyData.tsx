export type dailyDataType ={
    key?:string,
    date:number | Date,
    temp:number,
    icon:string,
    description:string,
}
export default function getDailyData (data : unknown) :dailyDataType[]
{
    const {list}  = data as any;
    let newData: dailyDataType[]= [];
    list.slice(1).map((item :any, index:number)=>{
      let {dt,main:{temp}, weather:[{description, icon}]} = item;
      newData.push({
        key:dt.toString(),
        date:dt,
        temp,
        icon,
        description
      })
    });
    return newData;
}