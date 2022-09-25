import React from "react";
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from './AppBar';


export const Formateurs = () => (
    <section>
      <FormateursClass />
    </section>
  );

class FormateursClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formateurs: [],
            loaded: false
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

  componentDidMount() {
    var responseQuery;
    axios
    .get("http://localhost:443/getFormateurs", {
      responseType: "json",
    })
    .then(response => response.data) 
    .then(data => {
        responseQuery = data.data
        console.log("responseQuery)");
      console.log(responseQuery);
      this.setState({ 
        formateurs: responseQuery, 
        loaded: true
    });
    })
  }

  
  
  render() {
    return (
        <div>
            <AppBar/>
            <h1>Formateurs</h1>
            <ul >
                {this.state.loaded &&
                this.state.formateurs?.map(formateur => {
                    return (
                        //<li key={formateur.id}>{formateur.Mail}</li>
                        <Card key={formateur.id} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt={formateur.tel}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {formateur.Mail}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {formateur.Description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">{formateur.Mail}</Button>
                            <Button size="small">{formateur.Tel}</Button>
                        </CardActions>
                        </Card>
                    );
                })}
            </ul>
        </div>
        

    )
  }
}