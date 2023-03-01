import IextraData from "../interfaces/extraData";

export default function getExtraData(
  data: { list: any; }[],
  
) {
  console.log(data);
  const extraDataArr: IextraData[] = [];
    const { list} = data[0];
    const{  
        main: { humidity, pressure },
        wind: { speed },
        } = list[0];
    extraDataArr.push({
      key: '1',
      condition: "humidity",
      text: humidity,
      icon: "water-outline",
      unit: "%",
    });
    extraDataArr.push({
      key: '2',
      condition: "wind",
      text: speed,
      icon: "weather-windy",
      unit: "km/h",
    });
    extraDataArr.push({
      key: '3',
      condition: "pressure",
      text: pressure,
      icon: "weather-pouring",
      unit: "hpa",
    });
    return extraDataArr;
  }

