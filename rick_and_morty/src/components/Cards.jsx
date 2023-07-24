import Card from "./Card";

export default function Cards({characters}) {
  return (
    <div>
      {characters.map(
        ({ id, name, species, gender, image, origin, status, onClose }) => {
          return (
            <Card 
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              origin={origin}
              status={status}
              onClose={() => window.alert('Emulamos que se cierra la card')}
            ></Card>
          );
        }
      )}
    </div>
  );
}

