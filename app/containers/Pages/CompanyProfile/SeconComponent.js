import React, { Component } from 'react'
import { Grid, Typography, TextField } from '@material-ui/core';

export default class SeconComponent extends Component {

    render() {
        const { classes } = this.props;
        const { website, services } = this.props.state;

        return (
            <>
                <Grid container spacing={3} style={{ marginTop: "50px" }} >
                    <Grid sm={4} xs={12} className={classes.padding1}>
                        <Typography className={classes.label} variant="button">
                            Website
                        </Typography>
                        <TextField
                            id="outlined-full-width"
                            placeholder="Superkeukens"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            className={classes.paper}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={website}
                            onChange={(e) => {
                                let website = e.target.value;
                                this.props.handleState({ website });
                            }}
                        />
                    </Grid>
                    <Grid sm={2} xs={12} className={classes.margin1Left}>
                        <Typography className={classes.label} variant="button">
                            Services
                        </Typography>
                        <TextField
                            id="outlined-full-width"
                            placeholder="Superkeukens"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            className={classes.paper}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={services[0]}
                            onChange={(e) => {
                                services[0] = e.target.value;
                                this.props.handleState({ services });
                            }}
                        />
                    </Grid>
                    <Grid sm={2} xs={12} className={classes.margin1Left}>
                        <Typography className={classes.label} variant="button">
                            {"  "}<span style={{ visibility: 'hidden' }}>ge</span>
                        </Typography>
                        <TextField
                            id="outlined-full-width"
                            placeholder="Superkeukens"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            className={classes.paper}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={services[1]}
                            onChange={(e) => {
                                services[1] = e.target.value;
                                this.props.handleState({ services });
                            }}
                        />
                    </Grid>
                    <Grid sm={2} xs={12} className={classes.margin1Left}>
                        <Typography className={classes.label} variant="button">
                            {"  "}<span style={{ visibility: 'hidden' }}>ge</span>
                        </Typography>
                        <TextField
                            id="outlined-full-width"
                            placeholder="Superkeukens"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            className={classes.paper}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={services[2]}
                            onChange={(e) => {
                                services[2] = e.target.value;
                                this.props.handleState({ services });
                            }}
                        />
                    </Grid>

                    <Grid sm={4} xs={12} className={classes.padding1}>
                        <Typography className={classes.label} variant="button">
                            Voeg een tekst over uw bedrijf
                        </Typography>
                        <TextField
                            id="outlined-multiline-static"
                            placeholder="Typ hier over uw bedrijf"
                            fullWidth
                            style={{ height: "230px" }}
                            margin="normal"
                            variant="outlined"
                            className={classes.paper}
                            multiline
                            rows={9}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={website}
                            onChange={(e) => {
                                let website = e.target.value;
                                this.props.handleState({ website });
                            }}
                        />
                    </Grid>
                    <Grid sm={3} xs={12} className={classes.margin1Left}>
                        <Typography className={classes.label} variant="button">
                            Openingstijden
                        </Typography>
                        <TextField
                            id="outlined-multiline-static"
                            placeholder="Maandag t/m Vrijdag 12:00 - 18:00
                            \nZaterdag 12:00 - 17:00
                            \nZondag gesloten!"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            multiline
                            rows={9}
                            className={classes.paper}
                            value={services[0]}
                            onChange={(e) => {
                                services[0] = e.target.value;
                                this.props.handleState({ services });
                            }}
                        />
                    </Grid>
                    <Grid sm={3} xs={12} className={classes.margin1Left}>
                        <Typography className={classes.label} variant="button">
                            Beoordelingen
                        </Typography>
                        <TextField
                            id="outlined-multiline-static"
                            placeholder="Superkeukens"
                            fullWidth
                            rows={9}
                            margin="normal"
                            variant="outlined"
                            className={classes.paper}
                            multiline
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={services[1]}
                            onChange={(e) => {
                                services[1] = e.target.value;
                                this.props.handleState({ services });
                            }}
                        />
                    </Grid>
                </Grid>

            </>
        )
    }
}
