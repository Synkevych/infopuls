var newClient = {
        account: function () {
            newClient.account = Math.round(Math.random() * 100 + 1);
        }
        , livesInCity: false // умеьшить
            
        , hasElectricStove: false // увеличить
            
        , hasLargeFamily: false // уменьшить
            
        , legalEntity: false // увиличить
            
        , hostel: false // уменьшить
            
        , previousScore: 100
        , previousPaymentDay: function () {
            newClient.previousPaymentDay = Math.round(Math.random() * (31 - 10) + 10);
        }
        , previousPaid: 100
        , debt: 0
        , name: "Василь"
        , toPay: 0
        , surname: "Петренко"
        , score: function () {
            newClient.score = Math.round(Math.random() * 1000);
        }
    }
    , rare = 0.9
    , privileges = ""
    , rise = "";
newClient.score();
newClient.account();
newClient.previousPaymentDay();