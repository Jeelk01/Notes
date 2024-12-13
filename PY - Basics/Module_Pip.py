# Modules
# A module in Python is a file containing Python code, such as functions, classes, or variables, that you can reuse in other programs.
# Consdider a module to be same as a code library.
# A file containing set of functions that you want to use in your application.
# Modules are very useful as we don't want to built anything from scratch.
# it saves time and effort.

# 1. Built-in Module
# 2. External Moduule 


# ------------------------------ Built-In Module ------------------------------
# Pre installed with the Python.
# can import them directly without additional installation.

# ----- Some popular Built-in modules ----- #
# General-Purpose Modules:
#   os: Operating system interactions.
#   sys: System-specific parameters and functions.
#   time: Time-related functions.
#   datetime: Manipulating dates and times.
#   math: Mathematical functions.
#   random: Random number generation.
#   statistics: Statistical calculations.
# Data Handling:
#   json: JSON parsing and encoding.
#   csv: CSV file handling.
#   sqlite3: SQLite database access.
#   pickle: Object serialization.
#   hashlib: Secure hashing algorithms.
# File and Directory Management:
#   os.path: Common pathname manipulations.
#   shutil: High-level file operations.
#   glob: File pattern matching.
# Networking and Internet:
#   socket: Low-level networking interface.
#   http.client: HTTP protocol client.
#   urllib: URL handling.
#   ftplib: FTP protocol client.
#   email: Handling email messages.
# Development and Debugging:
#   logging: Logging messages for debugging.
#   traceback: Extracting stack traces.
#   unittest: Unit testing framework.
#   doctest: Testing code embedded in documentation.
# Text and String Processing:
#   re: Regular expressions.
#   string: Common string operations.
#   textwrap: Text wrapping and formatting.
# Data Structures:
#   collections: Specialized data structures like deque, Counter.
#   heapq: Heap queue algorithms.
#   array: Efficient arrays of numeric values.
# Utilities:
#   itertools: Iterators for efficient looping.
#   functools: Higher-order functions and operations on callable objects.
#   enum: Enumerations support.


# ------------------------------ External Module ------------------------------
# Third-party Libraries not included in Python's Standard Library.
# You need to installa them sing Package Manager. - like pip

# ----- Some popular External modules ----- #
# Web Development:
#   flask: Lightweight web framework.
#   django: High-level web framework.
#   fastapi: High-performance API development.
# Data Analysis and Machine Learning:
#   numpy: Numerical computing.
#   pandas: Data manipulation and analysis.
#   matplotlib: Data visualization.
#   seaborn: Statistical data visualization.
#   scikit-learn: Machine learning tools.
#   tensorflow: Deep learning framework.
#   keras: High-level neural networks API.
# Web Scraping:
#   beautifulsoup4: Parsing HTML and XML documents.
#   scrapy: Web scraping framework.
#   selenium: Automating web browsers.
# Networking and APIs:
#   requests: HTTP requests.
#   httpx: Asynchronous HTTP requests.
#   socketio: Real-time communication.
# Automation and Utilities:
#   pyautogui: GUI automation.
#   sh: Shell commands from Python.
#   schedule: Task scheduling.
# Database and ORM:
#   sqlalchemy: SQL toolkit and ORM.
#   psycopg2: PostgreSQL adapter.
#   pymongo: MongoDB client.
# Game Development:
#   pygame: Game development framework.
#   Visualization and Dashboards:
#   plotly: Interactive plots.
#   dash: Dashboard and web app framework.
# Testing:
#   pytest: Testing framework.
#   mock: Mocking objects for testing.
# Other Tools:
#   opencv-python: Computer vision and image processing.
#   pyyaml: YAML parser and emitter.
#   pyttsx3: Text-to-speech conversion.

# ----------------------------------------------------------------------------------------------------
# ----------------------------------------------------------------------------------------------------

# pip : Pip Installs Packages
# it is a default package manager for Python
# used to install, upgrade, and manage third-party Python libraries and modules from the Python Package Index (PyPI).
 

# Check the version of pip 
# Command : pip --version

# install pip manually
# script : python get-pip.py

# install a package using pip
# commaand : pip install package name

# install a package with specific version
# command : pip install package_name==version_number
# pip install Django=3.2.10

# upgrade a package
# command :  pip install --upgrade packaged_name

# uninstall package
# command :  pip uninstall package_name

# list of installed packages
# command : pip list

# Display pip help and avalable command
# command : pip --help