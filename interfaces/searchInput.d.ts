export default interface IsearchInput{
    getSearchForecast(city: string): Promise<void>;
    setCityName: React.Dispatch<React.SetStateAction<string>>;
    cityName: string;
}