import os
import sys
from pathlib import Path

def get_tree(directory, prefix="", is_last=True, ignore_dirs=None, ignore_files=None):
    """
    Recursively generates a tree structure of the directory.
    """
    if ignore_dirs is None:
        ignore_dirs = {'.git', '__pycache__', 'node_modules', '.vscode', '.idea', 'venv', 'env'}
    if ignore_files is None:
        ignore_files = {'.DS_Store', 'Thumbs.db', 'desktop.ini'}
    
    tree_lines = []
    
    # Get all items in directory, sorted with directories first
    items = []
    try:
        with os.scandir(directory) as it:
            for entry in it:
                if entry.name in ignore_dirs or entry.name in ignore_files:
                    continue
                items.append(entry)
    except PermissionError:
        return tree_lines
    
    # Sort: directories first, then files
    items.sort(key=lambda x: (not x.is_dir(), x.name.lower()))
    
    for i, entry in enumerate(items):
        is_last_item = (i == len(items) - 1)
        
        # Determine the connector
        if is_last:
            connector = "    └── " if is_last_item else "    ├── "
        else:
            connector = "│   └── " if is_last_item else "│   ├── "
        
        # Add the current item
        tree_lines.append(f"{prefix}{connector}{entry.name}")
        
        # If it's a directory, recursively process it
        if entry.is_dir():
            extension = "    " if is_last_item else "│   "
            tree_lines.extend(
                get_tree(entry.path, prefix + extension, is_last_item, ignore_dirs, ignore_files)
            )
    
    return tree_lines

def generate_project_structure(root_dir=None):
    """
    Generates and prints the project structure tree.
    """
    if root_dir is None:
        root_dir = os.path.dirname(os.path.abspath(__file__))
    
    root_name = os.path.basename(root_dir)
    
    print(f"\n📁 Project Structure: {root_name}/")
    print("│")
    
    # Get the tree
    tree_lines = get_tree(root_dir)
    
    # Print each line
    for line in tree_lines:
        print(line)
    
    # Count files and folders
    total_files = 0
    total_dirs = 0
    for root, dirs, files in os.walk(root_dir):
        # Skip ignored directories
        ignore_dirs = {'.git', '__pycache__', 'node_modules', '.vscode', '.idea', 'venv', 'env'}
        dirs[:] = [d for d in dirs if d not in ignore_dirs]
        
        total_dirs += len(dirs)
        total_files += len(files)
    
    print(f"\n📊 Summary: {total_dirs} folders, {total_files} files")

def save_tree_to_file(root_dir=None, output_file="project_structure.txt"):
    """
    Saves the project structure tree to a text file.
    """
    if root_dir is None:
        root_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Redirect stdout to capture the tree
    import io
    from contextlib import redirect_stdout
    
    f = io.StringIO()
    with redirect_stdout(f):
        generate_project_structure(root_dir)
    
    # Save to file
    output_path = os.path.join(root_dir, output_file)
    with open(output_path, 'w', encoding='utf-8') as file:
        file.write(f.getvalue())
    
    print(f"\n✅ Structure saved to: {output_file}")

if __name__ == "__main__":
    # Get the directory where this script is located
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Generate and print the tree
    generate_project_structure(current_dir)
    
    # Optionally save to a file
    save_tree_to_file(current_dir)