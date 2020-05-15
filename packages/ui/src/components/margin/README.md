# margin

The margin component will be displayed on the side of the editor and will provide the user with features like line numbering, breakpoint selection for debugging and collapsing code blocks.

## design

The design of the line number has to allow for multiple columns per line, that all serve different purposes.

To facilitate this in a manner that is extensible and simple, we delegate the definition of margin columns to the user, meaning that columns have to be provided from the outside and conform to a certain interface that the margin component defines.

This is done because it decouples the margin from the columns, and the columns from eachother. This results in simpler code and easier addition and deletion of columns. Also, since we expect to make the columns optional, to be turned on or off via a configuration file, since the columns that are passed are specified from the outside of the margin, we do not have to do this configuration related logic inside the margin component, making it a nice and dumb component.

