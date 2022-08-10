
new Vue({
    el: "#app",
    data: {
        city: "杭州"
    },
    methods: {
        searchWeather(city) {
            // TODO 天气查询
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
                .then(function (response) {
                    console.log(response.data.data.forecast);
                    alert(response.data.data.forecast);
                })
                .catch(function (error) {
                    console.log(error);
                    alert(error);
                })
        }
    }
})