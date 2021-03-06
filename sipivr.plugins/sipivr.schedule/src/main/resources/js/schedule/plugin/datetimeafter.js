define(["schedule/plugin/basemodule", "editor/ElementParameter", "editor/ToolbarItem", "messages"],
    function (Module, ElementParameter, ToolbarItem, messages) {
        var key = "ru.sipivr.schedule.plugin.datetimeafter";

        function NewModule(designer, menu, options) {
            Module.call(this, designer, menu, options);

            this.name(key);

            this.parameters.push(new ElementParameter({ name: "after", date: "yyyy-MM-dd hh:mm", title: messages["ru.sipivr.schedule.after"] }));

            this.icon("icon-clock");
        }

        NewModule.prototype = Object.create(Module.prototype);

        function NewToolbarItem(options){
            ToolbarItem.call(this, options);

            this.name = key;
            this.section = "ru.sipivr.schedule";
            this.data = NewModule;
            this.icon = "icon-clock";
        }

        NewToolbarItem.prototype = Object.create(ToolbarItem.prototype);

        return NewToolbarItem;
    });