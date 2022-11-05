import { http } from "./httpService";
const token = "68283.WF5AdpjT2PSP12ePMldnNyuByZJ6kdGXsuerEhjd"

export const SearchService = ({ input, database}) => {
    return (
        http.get(`/search?token=${token}&q=${input}&type=exact&filter=${database}`)
    )
}



