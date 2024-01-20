import axios from "axios";
import { defaultConfig } from "../config/default.config";

const API_URL = defaultConfig.API_URL;


const fillTimesheetIn = async (year: number, month: number, accessToken: string, userID: string) => {

  const firstDayOfMonth: Date = new Date(year, month - 1, 1);
  const lastDayOfMonth: Date = new Date(year, month, 0);
 

  for (let currentDay = new Date(firstDayOfMonth); currentDay <= lastDayOfMonth; currentDay.setDate(currentDay.getDate() + 1)) {
    const dayOfWeek = currentDay.getDay();
    const formattedDate = currentDay.toISOString().split('T')[0];

    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      if (dayOfWeek == 3) 
        await postWorkedHoursAtHome(formattedDate, accessToken, userID);
      else
        await postWorkedHoursAtClient(formattedDate, accessToken, userID);
    }
  }
};


const postWorkedHoursAtClient = async (date: String, accessToken: string, userID: string) => {
 
  return await axios.post(getTimehseerUrl(userID), getObjPresatieAtClient(date), {headers: { Authorization: `${accessToken}`,}})
    .then((response) => {
      return {response :  response.data};
    })
    .catch((error) => {
      console.log(`Error --> ${error}`);
      return {response :  error.data};
    });
};

const postWorkedHoursAtHome = async (date: String, accessToken: string, userID: string) => {

  console.log(getHeaders(accessToken));
  return await axios.post(getTimehseerUrl(userID), getObjPresatieAtHome(date), {headers: { Authorization: `${accessToken}`,}})
    .then((response) => {
      return {response :  response.data};
    })
    .catch((error) => {
      console.log(`Error --> ${error}`);
      return {response :  error};
    });
};


const getTimehseerUrl = (userID: string)  => `${API_URL}/timeoff/employees/${userID}/requests`;
const getHeaders = (accessToken : string) => ({
  headers: {'Authorization': `Bearer ${accessToken}` },
});



const getObjPresatieAtClient = (date: String) => {
  return {
    policyType: "Prestaties - bij de klant",
    requestRangeType: "days",
    startDate: date,
    endDate: date,
    startDatePortion: "all_day",
    endDatePortion: "all_day",
    hours: null as number | null, 
    minutes: null as number | null,
    reasonCode: 46389
  };

}

const getObjPresatieAtHome = (date: String) => {
  return {
    policyType: "Prestaties - werken van thuis",
    requestRangeType: "days",
    startDate: date,
    endDate: date,
    startDatePortion: "all_day",
    endDatePortion: "all_day",
    hours: null as number | null, 
    minutes: null as number | null,
    reasonCode: 46544
  };
}


export const timesheetService = {
  fillTimesheetIn,
};