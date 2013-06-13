<?php
/**
 * Created by JetBrains PhpStorm.
 * User: ryangauthier
 * Date: 5/7/13
 * Time: 9:46 PM
 * To change this template use File | Settings | File Templates.
 */?>


<!--                Extras              -->


<div data-role="page" id="extrasPage">

    <div data-role="content">
        <a data-role="button" href="#page1">
            Button
        </a>

        <div id="checkboxes1" data-role="fieldcontain">
            <fieldset data-role="controlgroup" data-type="vertical">
                <legend>
                    Choose:
                </legend>
                <input id="checkbox1" name="" data-theme="e" type="checkbox">
                <label for="checkbox1">
                    Checkbox
                </label>
                <input id="checkbox2" name="" data-theme="e" type="checkbox">
                <label for="checkbox2">
                    Checkbox
                </label>
                <input id="checkbox3" name="" data-theme="e" type="checkbox">
                <label for="checkbox3">
                    Checkbox
                </label>
            </fieldset>
        </div>
        <div data-role="fieldcontain">
            <fieldset data-role="controlgroup" data-type="vertical">
                <legend>
                    Choose:
                </legend>
                <input id="radio1" name="" value="radio1" data-theme="e" type="radio">
                <label for="radio1">
                    Option
                </label>
                <input id="radio2" name="" value="radio2" data-theme="e" type="radio">
                <label for="radio2">
                    Option
                </label>
                <input id="radio3" name="" value="radio3" data-theme="e" type="radio">
                <label for="radio3">
                    Option
                </label>
            </fieldset>
        </div>
        <div data-role="fieldcontain">
            <label for="textinput2">
                Title
            </label>
            <input name="" id="textinput2" placeholder="" value="" type="text">
        </div>
        <div data-role="fieldcontain">
            <label for="selectmenu1">
                Choose:
            </label>
            <select id="selectmenu1" name="" data-theme="e">
                <option value="option1">
                    Option 1
                </option>
                <option value="value">
                    Option 2
                </option>
                <option value="value">
                    Option 3
                </option>
                <option value="value">
                    Option
                </option>
                <option value="value">
                    Option
                </option>
            </select>
        </div>
        <div data-role="fieldcontain">
            <label for="slider1">
                Slider
            </label>
            <input id="slider1" type="range" name="slider" value="50" min="0" max="100"
                   data-highlight="false">
        </div>
        <div data-role="fieldcontain">
            <label for="toggleswitch1">
                Switch
            </label>
            <select name="toggleswitch1" id="toggleswitch1" data-theme="e" data-role="slider">
                <option value="off">
                    Off
                </option>
                <option value="on">
                    On
                </option>
            </select>
        </div>
        <div data-role="fieldcontain">
            <label for="textarea2">
                Title
            </label>
            <textarea name="" id="textarea2" placeholder=""></textarea>
        </div>
        <form action="">
            <div>
                <a href="" data-transition="fade">
                    Link
                </a>
            </div>
            <div data-role="collapsible-set">
                <div data-role="collapsible" data-collapsed="false">
                    <h3>
                        Section Header
                    </h3>
                </div>
                <div data-role="collapsible" data-collapsed="false">
                    <h3>
                        Section Header
                    </h3>
                </div>
                <div data-role="collapsible" data-collapsed="false">
                    <h3>
                        Section Header
                    </h3>
                    <ul data-role="listview" data-divider-theme="b" data-inset="true">
                        <li data-role="list-divider" role="heading">
                            Divider
                        </li>
                        <li data-theme="c">
                            <a href="#" data-transition="slide">
                                Button
                            </a>
                        </li>
                        <li data-theme="c">
                            <a href="#page1" data-transition="slide">
                                Button
                            </a>
                        </li>
                        <li data-role="list-divider" role="heading">
                            Divider
                        </li>
                        <li data-theme="c">
                            <a href="#page1" data-transition="slide">
                                Button
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="ui-grid-c">
                <div class="ui-block-a">
                </div>
                <div class="ui-block-b">
                </div>
                <div class="ui-block-c">
                </div>
                <div class="ui-block-d">
                </div>
                <div class="ui-block-a">
                </div>
                <div class="ui-block-b">
                </div>
                <div class="ui-block-c">
                </div>
                <div class="ui-block-d">
                </div>
                <div class="ui-block-a">
                </div>
                <div class="ui-block-b">
                </div>
                <div class="ui-block-c">
                </div>
                <div class="ui-block-d">
                </div>
            </div>
            <input type="submit" data-icon="arrow-r" data-iconpos="right" value="Submit">
        </form>
    </div>
</div>
<div data-theme="a" data-role="footer" data-position="fixed">
    <h3>
        Footer
    </h3>
</div>
<script src="/js/javascript.js"></script>
</body>
</html>