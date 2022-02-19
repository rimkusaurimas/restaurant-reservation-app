import React from "react";

import PropTypes from "prop-types";

const Typography = (props) => {
  return <div>{props.children}</div>;
};

Typography.propTypes = {
  children: PropTypes.any,
};

export default {
  title: "Typography",
  component: Typography,
};

export const Heading1 = () => {
  return (
    <Typography>
      <h1>Aix En Provence, Versailles, Avignon, Paris</h1>
    </Typography>
  );
};

export const Heading2 = () => {
  return (
    <Typography>
      <h2>Aix En Provence, Versailles, Avignon, Paris</h2>
    </Typography>
  );
};

export const Heading2Alt = () => {
  return (
    <Typography>
      <h2 className="h2-alt">Aix En Provence, Versailles, Avignon, Paris</h2>
    </Typography>
  );
};

export const Heading3 = () => {
  return (
    <Typography>
      <h3>Aix En Provence, Versailles, Avignon, Paris</h3>
    </Typography>
  );
};

export const Heading3Alt = () => {
  return (
    <Typography>
      <h3 className="h3-alt">Aix En Provence, Versailles, Avignon, Paris</h3>
    </Typography>
  );
};

export const Heading4 = () => {
  return (
    <Typography>
      <h4>Aix En Provence, Versailles, Avignon, Paris</h4>
    </Typography>
  );
};

export const Heading4Alt = () => {
  return (
    <Typography>
      <h4 className="h4-alt">Aix En Provence, Versailles, Avignon, Paris</h4>
    </Typography>
  );
};

export const Heading5 = () => {
  return (
    <Typography>
      <h5>Aix En Provence, Versailles, Avignon, Paris</h5>
    </Typography>
  );
};

export const Paragraph = () => {
  return (
    <Typography>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        voluptates magni odit dolore sint officia labore similique, eligendi
        numquam illum quisquam minima nisi voluptas eaque eveniet omnis tempora
        minus repudiandae. Quibusdam in excepturi asperiores placeat nesciunt
        magnam dolorum facere ullam accusantium alias numquam, architecto
        aperiam necessitatibus repudiandae? Facilis, recusandae quas quae
        maiores iure deserunt, temporibus culpa voluptas eius voluptatum velit!
      </p>
    </Typography>
  );
};

export const Heading1P = () => {
  return (
    <Typography>
      <h1>Aix En Provence, Versailles, Avignon, Paris</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        voluptates magni odit dolore sint officia labore similique, eligendi
        numquam illum quisquam minima nisi voluptas eaque eveniet omnis tempora
        minus repudiandae. Quibusdam in excepturi asperiores placeat nesciunt
        magnam dolorum facere ullam accusantium alias numquam, architecto
        aperiam necessitatibus repudiandae? Facilis, recusandae quas quae
        maiores iure deserunt, temporibus culpa voluptas eius voluptatum velit!
      </p>
    </Typography>
  );
};

export const Heading2P = () => {
  return (
    <Typography>
      <h2>Aix En Provence, Versailles, Avignon, Paris</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        voluptates magni odit dolore sint officia labore similique, eligendi
        numquam illum quisquam minima nisi voluptas eaque eveniet omnis tempora
        minus repudiandae. Quibusdam in excepturi asperiores placeat nesciunt
        magnam dolorum facere ullam accusantium alias numquam, architecto
        aperiam necessitatibus repudiandae? Facilis, recusandae quas quae
        maiores iure deserunt, temporibus culpa voluptas eius voluptatum velit!
      </p>
    </Typography>
  );
};
