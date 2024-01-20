const API_URL = 'https://api.hibob.com/v1';

const id = "3236672069718507876"
const TIMESHEET_URL = `${API_URL}/timeoff/employees/${id}/requests`


export const fillTimesheet = async (year, month, hours, accessToken) => {
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);
  
    for (let currentDay = new Date(firstDayOfMonth); currentDay <= lastDayOfMonth; currentDay.setDate(currentDay.getDate() + 1)) {
      const dayOfWeek = currentDay.getDay();
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        const formattedDate = format(currentDay, 'dd-MM-yyyy');
        console.log(formattedDate);
        await postWorkedHours(formattedDate, hours, accessToken);
      }
    }
  };
  
  
  const postWorkedHours = async (date, hours, accessToken) => {
    const postObject = { "policyType": "Prestaties - bij de klant", "requestRangeType": "days", "startDate": "2024-01-08", "endDate": "2024-01-08", "startDatePortion": "all_day", "endDatePortion": "all_day", "hours": null, "minutes": null, "reasonCode": 46389 };
  
    try {
    //   const response = await axios.post(timeuri, postObject, { headers: { Authorization: `Bearer ${accessToken}` } });
      res.json({ response: "success", status: response.status });
    } catch (error) {
      console.log(error);
      res.status(error.response.status).json({ statusText: error.response.statusText });
    }
  };

  export const eventController = { 
    fillTimesheet,
  };