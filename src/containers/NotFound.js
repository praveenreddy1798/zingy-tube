import { Navbar } from "../components";

export const NotFound = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-section main-section-strech pd-md">
        <h1 className="flex-center">Not Found</h1>
        <h1 className="flex-center mg-t-sm">
          Sorry, we couldnt find the one you are looking for !
        </h1>
      </main>
    </div>
  );
};
