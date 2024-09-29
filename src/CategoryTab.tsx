export function CategoryTab({
  categoryName,
  isSelected,
  onClick,
}: {
  categoryName: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      style={{
        background: isSelected ? "#afa7da" : "#eaf5f9",
        padding: "10px 15px",
        marginInline: "5px",
        color: isSelected ? "white" : "black",
        borderRadius: "50px",
        textAlign: "center",
        width: "fit-content",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {categoryName}
    </div>
  );
}
