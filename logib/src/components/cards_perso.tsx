export default function Cards(props: any) {
  return (
    <div className="rounded overflow-hidden shadow-lg max-w-md">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {props.personnages.nom}
          <br />
          image
          <br />
        </div>
        <p className="text-yellow-200 text-base">image en fond</p>
      </div>
    </div>
  );
}
