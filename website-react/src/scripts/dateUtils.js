class DateUtils {
    dateFromMySQL(mysqlString) {
        var t;
        var result = null;
    
        if (typeof mysqlString === "string") {
            t = mysqlString.split(/[- :]/);
            result = new Date(t[0], t[1] - 1, t[2], t[3] || 0, t[4] || 0, t[5] || 0);
        }
    
        return result;
    }
    
    dateToString(date) {
        var options = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    
        return date.toLocaleDateString("en-US", options);
    }
}

export default DateUtils;