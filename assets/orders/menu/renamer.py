import os
import unicodedata
import re

def clean_filename(filename):
    name, ext = os.path.splitext(filename)
    # Remove accents/diacritics (e.g., â -> a, œ -> oe)
    nfkd_form = unicodedata.normalize('NFKD', name)
    only_ascii = nfkd_form.encode('ASCII', 'ignore').decode('ASCII')
    
    # Lowercase and replace spaces/special chars with underscores
    cleaned = only_ascii.lower()
    cleaned = re.sub(r'[\s\-\+\(\)\,\.\']+', '_', cleaned)
    cleaned = re.sub(r'_+', '_', cleaned).strip('_')
    
    return cleaned + ext.lower()

def rename_menu_images(base_dir):
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file == 'findir.py' or not file.lower().endswith(('.png', '.jpg', '.jpeg')):
                continue
            
            old_path = os.path.join(root, file)
            new_filename = clean_filename(file)
            new_path = os.path.join(root, new_filename)
            
            if old_path != new_path:
                os.rename(old_path, new_path)
                print(f"Renamed: {file} -> {new_filename}")

if __name__ == "__main__":
    current_directory = os.path.dirname(os.path.abspath(__file__))
    rename_menu_images(current_directory)
    print("All menu images cleaned and renamed successfully!")