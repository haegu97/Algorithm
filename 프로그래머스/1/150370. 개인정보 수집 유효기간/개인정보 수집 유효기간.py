def solution(today, terms, privacies):
    answer = []
    today_year = int(float(today[0:5]))
    today_month = int(float(today[5:7]))
    today_day = int(float(today[8:10]))
    
    for i in range(len(privacies)):
        privacy = privacies[i]
        year = int(privacy[0:4])
        month = int(float(privacy[5:7]))
        day = int(float(privacy[8:10]))
        term = privacy[11]
        year_dif = today_year - year
        month_dif = today_month - month
        day_dif = today_day - day 
        total_dif = day_dif + (month_dif*28) + (year_dif*12*28)
        for j in range(len(terms)):
            if term == terms[j][0]:
                term_of_privacies = int(terms[j][2:]) * 28  
                if term_of_privacies <= total_dif:
                    answer.append(i+1)
        
    return answer