import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import {LocalAtm, MonetizationOn, Person, Sell, TrendingUp} from "@mui/icons-material";
import {ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Legend, Line} from "recharts";

const data = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    }
]

const AdminDashboard = () => {

    return (
        <Container maxWidth={"xll"} sx={{paddingY: 2}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Box className={"card"}>
                        <Box sx={{
                            minHeight: "160px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: 2
                        }}>
                            <Stack direction={"column"}>
                                <Sell fontSize={"large"} color={""}/>
                                <Typography variant={"h4"} fontWeight={600}>123</Typography>
                                <Typography variant={"caption"} component={"p"} color={""}>
                                    Sales This Month
                                </Typography>
                            </Stack>
                            <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
                                <TrendingUp sx={{fontSize: "3rem"}} color={"success"}/>
                                <Typography variant={"h5"} sx={{color: "success.main"}}>
                                    2%
                                </Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Box className={"card"}>
                        <Box sx={{
                            minHeight: "160px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: 2
                        }}>
                            <Stack direction={"column"}>
                                <MonetizationOn fontSize={"large"} color={""}/>
                                <Typography variant={"h4"} fontWeight={600}>$500</Typography>
                                <Typography variant={"caption"} component={"p"} color={""}>
                                    Cost This Month
                                </Typography>
                            </Stack>
                            <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
                                <TrendingUp sx={{fontSize: "3rem"}} color={"error"}/>
                                <Typography variant={"h5"} sx={{color: "error.main"}}>
                                    1.5%
                                </Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Box className={"card"}>
                        <Box sx={{
                            minHeight: "160px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: 2
                        }}>
                            <Stack direction={"column"}>
                                <Person fontSize={"large"} color={""}/>
                                <Typography variant={"h4"} fontWeight={600}>53</Typography>
                                <Typography variant={"caption"} component={"p"} color={""}>
                                    New Users This Month
                                </Typography>
                            </Stack>
                            <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
                                <TrendingUp sx={{fontSize: "3rem"}} color={"success"}/>
                                <Typography variant={"h5"} sx={{color: "success.main"}}>
                                    10.2%
                                </Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Box className={"card"}>
                        <Box sx={{
                            minHeight: "160px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: 2
                        }}>
                            <Stack direction={"column"}>
                                <LocalAtm fontSize={"large"} color={""}/>
                                <Typography variant={"h4"} fontWeight={600}>$53000</Typography>
                                <Typography variant={"caption"} component={"p"} color={""}>
                                    Overall Profit This Month
                                </Typography>
                            </Stack>
                            <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
                                <TrendingUp sx={{fontSize: "3rem"}} color={"success"}/>
                                <Typography variant={"h5"} sx={{color: "success.main"}}>
                                    5%
                                </Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <Box className={"card"}>
                        <ResponsiveContainer width={"100%"} minHeight={300} height={"100%"}>
                            <LineChart width={730} height={250} data={data}
                                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <Legend/>
                                <Line type="monotone" dataKey="pv" stroke="#ceb880"/>
                                <Line type="monotone" dataKey="uv" stroke="#b4c7c2"/>
                            </LineChart>
                        </ResponsiveContainer>
                    </Box>
                </Grid>
            </Grid>

        </Container>
    )
}
export default AdminDashboard