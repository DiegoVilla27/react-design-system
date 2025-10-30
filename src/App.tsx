import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Button, Icon } from "./stories/components/atoms";
import { ButtonIcon } from "./stories/components/molecules";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px"
      }}
    >
      <div>
        <Button
          label="Save changes"
          variant="primary"
          size="md"
        />
      </div>
      <div>
        <Icon
          icon={faHeart}
          size="lg"
          color="var(--color-primary)"
        />
      </div>
      <div>
        <ButtonIcon
          label="Like"
          icon={faHeart}
          iconPosition="left"
          variant="primary"
          size="md"
          iconSize="sm"
        />
      </div>
    </div>
  );
}

export default App;
