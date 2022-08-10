
new Vue({
    el: "#app",
    data: {
        city: "杭州",
        weatherList: [],
        hotCities: ["北京", "上海", "广州", "深圳", "杭州"]
    },
    methods: {
        searchWeather(city) {
            var that = this;
            // TODO 天气查询
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + city)
                .then(function (response) {
                    // console.log(response.data.data.forecast);
                    that.weatherList = response.data.data.forecast;
                })
                .catch(function (error) {
                    console.log(error);
                    alert(error);
                })
        }, changeCity(city) {
            this.city = city;
            this.searchWeather(city);
        }
    }
})