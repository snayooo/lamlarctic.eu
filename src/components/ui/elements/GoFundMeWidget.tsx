export default function GoFundMeWidget() {
  return (
    <div className="w-full max-w-md mx-auto h-52">
      <div className="relative" style={{ paddingTop: "80%" }}>
        <iframe
          src="https://www.gofundme.com/f/aideznous-a-financer-notre-voyage-en-laponie/widget/medium?sharesheet=undefined&attribution_id=sl:753ea490-3004-4dd0-bd1b-9c2d2839ff75"
          className="absolute top-0 left-0 w-full h-52"
          style={{ border: "none" }}
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}
