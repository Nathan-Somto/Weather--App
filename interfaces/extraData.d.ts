export default interface IextraData{
    key?:number;
    text:number;
    condition?:string;
    icon:'water-outline'| 'weather-windy'| 'weather-pouring'| undefined;
    unit?:string;
}