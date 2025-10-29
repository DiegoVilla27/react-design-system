import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Button, Icon } from "./stories/components/atoms";

function App() {
  return (
    <>
      <Button
        label="Save changes"
        variant="primary"
        size="md"
      />
      <Icon
        icon={faHeart}
        size="md"
        color="#000000"
      />
    </>
  );
}

export default App;
