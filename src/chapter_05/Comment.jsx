import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
};

export default function Comment(props) {
  const { name, comment } = props;
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAgEEBQMGB//EADEQAAICAQICBwYHAQAAAAAAAAABAgMEESEFYRIiMUFRUnI0QnGBsdETJGKCkcHhMv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD64AAVAAAAALZZCuPSskormVpcSxU9FKT+EWBbA4VZuPa9I2LXwex3ACGS2I2AMUlsXUDsAAAHDMyY41XS7ZPaK5ncw+J2uzLku6HVX9gV7bZ3Tc7JOTEACgL+BnSqkqrnrW9k37v+FAhjB6ZisrcPtduJBvtj1X8ju2QDYoSYjYFsAAAPPZiayrk/O/qehMni9DjYr4rqy2lyYGcAEMoGxSQjGU5KMFq29EgNbhO2K34zb+hbbEprVNMa17q3fMlsghsTUlsRvcDQAAACJxjOLjNJxfamE5RhFym0ordtmVlcUnJuOOujHzPtAXJ4ZZBuVHXj5W919ylKm2L0dU1+1jxzMiEnJWy15vU7Lit6W8a38mUcK8PIse1ckvGWyNPEw4Yy6TfSsffp2fAzreI5M9ukoL9KOVebfU9rHJeEtwNxsSTK+NmwyNv+Z+X7HaTIIb0EbBsTUDWABL5/h0zn5YtgZPFMp22uqL6kHvzZQbBt94pQMhsGKwBitg2I2BKk4yUotprdNGzjZH49Kn73ZJczDbLnC7GrZ190lr/Ao0mxdQbFINor57/J3ek7srZ/sdvpAwGKyRWUQ2QDFYENitgxWBDZY4a/zS9LKzO/Dfal6WKNdsgARB//2Q=="
          alt=""
          style={styles.image}
        />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{name}</span>
        <span style={styles.commentText}>{comment}</span>
      </div>
    </div>
  );
}
