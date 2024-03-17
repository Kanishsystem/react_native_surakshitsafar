//import moment from 'moment';
const isEmptyObject = (obj:any) => {
    return Object.keys(obj).length === 0;
};
/**
 * 
 * @param dateString 
 * @param format 
 * @returns 
 */
// const formatDate = (dateString:string, format:string) => {
//     try {
//       const formattedDate = moment(dateString).format(format);
//       return formattedDate;
//     } catch (error) {
//       // If an error occurs (e.g., invalid date), return the original string
//       return dateString;
//     }
//   };
/**
 * 
 * @param title 
 * @param lengthDisplay 
 * @returns 
 */
const displayDots=(title:string,lengthDisplay:number=25)=>{
    return title && title.length > lengthDisplay ? `${title.substring(0, 30)}...` : title;
}

export{
    isEmptyObject,
   // formatDate,
    displayDots
}