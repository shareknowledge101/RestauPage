import os

def list_all_files(directory):
    """
    Recursively goes through all folders in the given directory
    and returns a list of all file paths found.
    """
    file_paths = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            # Join the root path with the file name
            full_path = os.path.join(root, file)
            file_paths.append(full_path)
    return file_paths

if __name__ == "__main__":
    # Get the directory where this script is located
    current_directory = os.path.dirname(os.path.abspath(__file__))
    
    # Get all file paths
    all_files = list_all_files(current_directory)
    
    # Create the output file name
    output_file = os.path.join(current_directory, "file_list.txt")
    
    # Write results to the text file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(f"Scanning directory: {current_directory}\n")
        f.write(f"Total files found: {len(all_files)}\n")
        f.write("=" * 60 + "\n\n")
        
        for file_path in all_files:
            f.write(file_path + "\n")
    
    print(f"✅ Results saved to: {output_file}")
    print(f"📁 Total files found: {len(all_files)}")