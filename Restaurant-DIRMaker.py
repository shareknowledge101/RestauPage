import os

# Define the root directory name
ROOT_DIR = "Restaurant Friends"

# Define directory structure and empty files to initialize
STRUCTURE = {
    "css": [
        "main.css",
        "loader.css",
        "cursor.css",
        "lighthouse-toggle.css",
        "drawer.css",
        "modal.css",
        "page-order.css",
        "page-about.css",
        "page-news.css",
        "page-weather.css",
    ],
    "js": [
        "app.js",
        "loader.js",
        "lighthouse.js",
        "weather.js",
    ],
    "js/models": [
        "orderModel.js",
        "newsModel.js",
        "aboutModel.js",
        "weatherModel.html",
    ],
    "assets/icons": [],
    "assets/images": [],
}

FILES = [
    "index.html",
    "restaurant_data.json"
]


def create_project_structure():
    print(f"📁 Creating root directory: '{ROOT_DIR}'...")
    os.makedirs(ROOT_DIR, exist_ok=True)

    # Create subdirectories and internal files
    for folder, files in STRUCTURE.items():
        folder_path = os.path.join(ROOT_DIR, folder)
        os.makedirs(folder_path, exist_ok=True)
        print(f"  └── Created folder: {folder_path}")

        for filename in files:
            file_path = os.path.join(folder_path, filename)
            if not os.path.exists(file_path):
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(f"/* {filename} initialized */\n")
                print(f"      ├── Created file: {filename}")

    # Create root level files
    for filename in FILES:
        file_path = os.path.join(ROOT_DIR, filename)
        if not os.path.exists(file_path):
            with open(file_path, "w", encoding="utf-8") as f:
                f.write("")
            print(f"  ├── Created root file: {filename}")

    print("\n✅ Project directory structure created successfully!")


if __name__ == "__main__":
    create_project_structure()