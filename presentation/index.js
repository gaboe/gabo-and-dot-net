// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";
// Import theme
import createTheme from "spectacle/lib/themes/default";
import "react-simple-flex-grid/lib/main.css";
import { Row, Col } from "react-simple-flex-grid";

const gaboThug = require("./../assets/gabo-thug.png");
// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Gabo a .NET
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Nakúkanie do kultúry .NETu na objednávku slavnoj FAI
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Row>
            <Col span={5}>
              <Image src={gaboThug} height={600}/>
            </Col>
            <Col offset={1} span={6}>
              <List>
                <ListItem>~2 roky vývoja v .NET</ListItem>
                <ListItem>BLogic</ListItem>
                <ListItem>BSP</ListItem>
                <ListItem>ALO, Colorlak, SummitTrade, Continental, Gumex</ListItem>
              </List>
            </Col>
          </Row>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Stack</Heading>
          <List>
            <ListItem>MSSQL</ListItem>
            <ListItem>ASP MVC</ListItem>
            <ListItem>Typescript</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
