import type { Key } from "../inventorydb";

export default function (props: { item: Key }) {
  const { item } = props;
  const latLng = [item.latLng[0].toFixed(6), item.latLng[1].toFixed(6)];
  return (
    <a
      title={item.address}
      href={window.makePermalink(latLng)}
      onclick={function (event) {
        event.preventDefault();
        window.renderPortalDetails(item.guid);
        window.selectPortalByLatLng(latLng);
      }}
      ondblclick={function (event) {
        event.preventDefault();
        window.renderPortalDetails(item.guid);
        window.zoomToAndShowPortal(item.guid, latLng);
      }}
    >
      {item.title}
    </a>
  );
}
