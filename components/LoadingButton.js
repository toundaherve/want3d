import { Button } from "reactstrap";

export default function LoadingButton({ text = "Submit", isLoading = false }) {
  return (
    <Button className="w-100" color="success" disabled={isLoading}>
      {isLoading ? (
        <span>
          <span className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </span>
        </span>
      ) : (
        text
      )}
    </Button>
  );
}
